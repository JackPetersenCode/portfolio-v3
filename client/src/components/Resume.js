import React from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "./Resume529.pdf"

const Resume = () => {

    return (
        <Document file={ pdf } options={{workerSrc: "/pdf.worker.js"}}>
            <Page pageNumber={1} />
        </Document>
        )
}

export default Resume;