import React from 'react';

interface CueSheetControlsProps {
  onExport: (format: 'csv' | 'pdf') => void;
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
};

const CueSheetControls: React.FC<CueSheetControlsProps> = ({ onExport }) => {
  return (
    <div>
      <button style={buttonStyle} onClick={() => onExport('csv')}>Export as CSV</button>
      <button style={buttonStyle} onClick={() => onExport('pdf')}>Export as PDF</button>
    </div>
  );
};

export default CueSheetControls;
