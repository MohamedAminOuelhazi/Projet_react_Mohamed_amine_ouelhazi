import React from 'react'
import { FileText } from 'lucide-react';

function submissionBox() {
    return (
        <div className="submission-box">
            <h3 className="submission-title">Final Paper Submission</h3>
            <p>The deadline for revising accepted papers is</p>
            <div className="highlight-date">24 March 2025</div>
            <button className="submit-button">
                Submit a revision of an accepted paper
            </button>
        </div>
    )
}

export default submissionBox;