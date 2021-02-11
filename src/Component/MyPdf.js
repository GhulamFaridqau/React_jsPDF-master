import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import jsPDF from 'jspdf';

class MyPdf extends Component{
  constructor(){
    super();
    this.state = {
      nama:'',
      pesan:'',
      tinggi:11.69,
      lebar:'08.27',
      judul:'Lintang.pdf'
    }
  }
  unduhPdf(e){
    e.preventDefault();

    var doc = new jsPDF()

    // # 2. put something interesting in there:
    doc.setFontSize(22)
    doc.text(20, 20, 'This is a title')
    doc.setFontSize(16)
    doc.text(20, 30, 'This is some normal sized text underneath.')

    // # 3. choose some useful outlet:
     
      // doc.save('dataurlnewwindow')
    doc.autoPrint({variant:"not confirmed"})
    var base64string = doc.output('dataurlnewwindow')
    debugBase64( base64string );

    function debugBase64(base64URL){
        var win = window.open();
        win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }
    };

render() {
    return (
      <div style={{margin:'20px', fontFamily:'Roboto'}}>
        {/* <span style={{width:'100%'}}>
            <p>PDF Filename:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Input pdf filename that will be downloaded..."
            onChange={(x)=>this.setState({judul: x.target.value+'.pdf'})} />
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>To:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Type the recipient here..."
            onChange={(x)=>this.setState({nama: x.target.value})} />
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Message:
            <textarea id="pesan" type="text" size="30" style={{width:'100%'}}
            placeholder="Type your messages here..."
            onChange={(x)=>this.setState({pesan: x.target.value})}/>
            </p>
        </span> */}
        <center>
        <Button onClick={this.unduhPdf.bind(this)}
        variant="raised" color="secondary" style={{margin:'5px'}}>
          Download PDF
        </Button>
        </center>

      </div>      
    )
}
}
export default MyPdf;