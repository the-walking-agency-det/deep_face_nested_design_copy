import React from 'react';
import { Cue } from '../../utils/backend';

interface CueSheetTableProps {
  cues: Cue[];
  onCueChange: (cueId: string, newRole: string) => void;
}

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};

const thStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '5px',
  boxSizing: 'border-box',
};

const CueSheetTable: React.FC<CueSheetTableProps> = ({ cues, onCueChange }) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Start Time</th>
          <th style={thStyle}>End Time</th>
          <th style={thStyle}>Title</th>
          <th style={thStyle}>Artist</th>
          <th style={thStyle}>Role</th>
        </tr>
      </thead>
      <tbody>
        {cues.map((cue) => (
          <tr key={cue.id}>
            <td style={tdStyle}>{cue.startTime}</td>
            <td style={tdStyle}>{cue.endTime}</td>
            <td style={tdStyle}>{cue.title}</td>
            <td style={tdStyle}>{cue.artist}</td>
            <td style={tdStyle}>
              <input
                style={inputStyle}
                type="text"
                value={cue.role}
                onChange={(e) => onCueChange(cue.id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CueSheetTable;
