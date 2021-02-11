import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {  PDFDownloadLink,
  Page,
  Text,
  View,
  Document } from '@react-pdf/renderer';
import MyPdf from './Component/MyPdf'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import jsPDF from 'jspdf';

class App extends Component{
  

render() {
    return (
      <div>
       <MyPdf/>
      </div>  
    )
}
}
export default App;