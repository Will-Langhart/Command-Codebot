// OCR Functions
extractText = async function(imageBlob) {
  try {
    const { TesseractWorker } = Tesseract;
    const worker = new TesseractWorker();
    const result = await worker.recognize(imageBlob);
    return result.text;
  } catch (error) {
    FrizonApp.log(`Error in text extraction: ${error}`);
    return null;
  }
};

FrizonApp.extractTextWithLang = async function(imageBlob, lang) {
  try {
    const { TesseractWorker } = Tesseract;
    const worker = new TesseractWorker();
    const result = await worker.recognize(imageBlob, { lang });
    return result.text;
  } catch (error) {
    FrizonApp.log(`Error in text extraction: ${error}`);
    return null;
  }
};

FrizonApp.extractTextWithProgress = async function(imageBlob, progressCallback) {
  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker();
  worker.setProgressHandler(progressCallback);
  const result = await worker.recognize(imageBlob);
  return result.text;
};

FrizonApp.extractBatchTexts = async function(imageBlobs) {
  const results = await Promise.allSettled(
    imageBlobs.map(blob => FrizonApp.extractText(blob))
  );
  return results.map(result => result.status === "fulfilled" ? result.value : "Failed");
};

FrizonApp.saveOCRResultsToLocalStorage = function(text, key) {
  localStorage.setItem(`ocr_${key}`, text);
};

FrizonApp.loadOCRResultsFromLocalStorage = function(key) {
  return localStorage.getItem(`ocr_${key}`);
};

// Local Storage Functions

FrizonApp.savePDFToLocalStorage = function(pdfData, key) {
  localStorage.setItem(key, pdfData);
};

FrizonApp.readPDFFromLocalStorage = function(key) {
  return localStorage.getItem(key);
};
        const express = require('express');
const multer = require('multer');
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const WebSocket = require('ws');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
app.use(bodyParser.json());
app.use(cors());
