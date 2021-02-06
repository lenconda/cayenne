import React, { useEffect, useRef, useState } from 'react';
import BaseModal from '@material-ui/core/Modal';
import Draggable from 'react-draggable';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps extends
  React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  modalTitle?: string | React.ReactNode;
  draggable?: boolean;
  closeOnBackdropClick?: boolean;
  footer?: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  centered?: boolean;
  dialogClassName?: string;
  scrollable?: boolean;
  size?: ModalSize;
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open = false,
  modalTitle,
  draggable = false,
  closeOnBackdropClick = true,
  children,
  footer,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
  centered = false,
  dialogClassName = '',
  scrollable = false,
  size = 'md',
  onClose,
  onConfirm,
}) => {
  const draggableElement = useRef(null);
  const [classNames, setClassNames] = useState<Array<string>>(['modal-dialog', 'cayenne-dialog']);

  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  const renderTitle = () => {
    if (!modalTitle) { return null }
    if (typeof modalTitle === 'string') {
      return <h6 className="modal-title">{modalTitle}</h6>;
    } else {
      return React.Children.map(modalTitle, (child) => child);
    }
  };

  const renderModalBody = () => {
    return (
      <div className={classNames.join(' ')} tabIndex={-1}>
        <div className="modal-content">
          {
            modalTitle && <div className={`modal-header${draggable ? ' cayenne-draggable-modal' : ''}`} ref={draggableElement}>
              {renderTitle()}
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
          }
          <div className="modal-body">
            {children}
          </div>
          {
            footer
              ? <div className="modal-footer">{footer}</div>
              : <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleClose}
                >{cancelButtonText}</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirm}
                >{confirmButtonText}</button>
              </div>
          }
        </div>
      </div>
    );
  };

  useEffect(() => {
    const currentClassNames = Array.from(classNames);
    currentClassNames.splice(1, 0, `modal-${size}`);
    if (centered) {
      currentClassNames.splice(1, 0, 'modal-dialog-centered');
    }
    if (scrollable) {
      currentClassNames.splice(-1, 0, 'modal-dialog-scrollable');
    }
    if (dialogClassName) {
      dialogClassName.split(/\s+/).forEach((className) => currentClassNames.push(className));
    }
    setClassNames(currentClassNames);
  }, [centered, size, scrollable, dialogClassName]);

  return (
    <div>
      <BaseModal
        open={open}
        className="modal"
        style={{ display: 'block' }}
        onClose={handleClose}
        disableEnforceFocus={true}
        disableBackdropClick={!closeOnBackdropClick}
      >
        {
          draggable
            ? <Draggable
                handle=".cayenne-draggable-modal"
                onDrag={(event) => {
                  if (
                    draggableElement && draggableElement.current &&
                    event.target === document.documentElement
                  ) {
                    return false;
                  }
                }}
              >{renderModalBody()}</Draggable>
            : <>{renderModalBody()}</>
        }
      </BaseModal>
    </div>
  );
};

export default Modal;
