import React from 'react'

const HistoryItem = ({historyItem, onDeleteHistoryItem}) => {
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDeleteClick = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <div className="history-details">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="history-info">
          <p className="history-title">{title}</p>
          <p className="history-domain">{domainUrl}</p>
        </div>
      </div>
      <div className="time-delete-container">
        <p className="time-accessed">{timeAccessed}</p>
        <button
          type="button"
          className="delete-button"
          onClick={handleDeleteClick}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
