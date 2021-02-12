import React, { useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import BaseModal from '@material-ui/core/Modal';
import Draggable from 'react-draggable';
import { IconConfig } from '../Icon';
import Button from '../Button';
import { generateIcon } from '../../utils/icons';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalComponentProps extends
  React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  icon?: IconConfig;
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

const ModalComponent: React.FC<ModalComponentProps> = ({
  open = false,
  icon,
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
  className = '',
  onClose,
  onConfirm,
}) => {
  const draggableElement = useRef(null);
  const modalClassName = useMemo(() => {
    const currentClassNames = ['modal-dialog', 'cayenne-dialog'];
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
    className.trim().split(/\s+/).forEach((key) => currentClassNames.push(key));
    return currentClassNames.join(' ');
  }, [className, centered, size, scrollable, dialogClassName]);

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
      return (
        <h6 className="modal-title">
          {icon && generateIcon(icon)}
          {modalTitle}
        </h6>
      );
    } else {
      return React.Children.map(modalTitle, (child) => child);
    }
  };

  const renderModalBody = () => {
    return (
      <div className={modalClassName} tabIndex={-1}>
        <div className="modal-content">
          {
            modalTitle && (
              <div
                className={`modal-header${draggable ? ' cayenne-draggable-modal' : ''}`}
                ref={draggableElement}
              >
                {renderTitle()}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            )
          }
          <div className="modal-body">
            {children}
          </div>
          {
            footer
              ? <div className="modal-footer">{footer}</div>
              : <div className="modal-footer">
                <Button
                  data-dismiss="modal"
                  htmlType="button"
                  onClick={handleClose}
                >{cancelButtonText}</Button>
                <Button
                  color="primary"
                  htmlType="button"
                  icon="faCheck"
                  onClick={handleConfirm}
                >{confirmButtonText}</Button>
              </div>
          }
        </div>
      </div>
    );
  };

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

export interface ConfirmModalProps {
  title?: string;
}

const confirm = async ({
  title = 'Confirm',
}) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(
    <ModalComponent
      open={true}
      closeOnBackdropClick={false}
      modalTitle={title}
      onClose={() => {
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
      }}
    />,
    container,
  );
};

export default Object.assign(ModalComponent, { confirm });
