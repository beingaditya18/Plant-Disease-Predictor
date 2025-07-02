// components/LanguageModal.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageModal = ({ id, onClose }) => {
  const { t, i18n } = useTranslation();

  // Define available languages directly here or pass as props
  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "hi", name: "Hindi", nativeName: "हिंदी" },
    // Add more languages as needed
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onClose(); // Close the modal after changing language
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              {t('language.title')}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="list-group">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`list-group-item list-group-item-action ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                  data-bs-dismiss="modal" // This closes the modal
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">{lang.nativeName}</span>
                      <br />
                      <small className="text-muted">{lang.name}</small>
                    </div>
                    {i18n.language === lang.code && <i className="bi bi-check-circle-fill text-success"></i>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
