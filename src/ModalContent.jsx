import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


function ModalContent({
  closeModal,
  modalTitle,
  modalSelectName,
  modalSelectTitle,
  isImagePresent,
  isSelectPresent,
  isCountPresent
}) {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          marginBottom: '40px',
          fontSize: '14px',
        }}
      >
        <h4>{modalTitle}</h4>
        <CloseIcon onClick={closeModal} />
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        {isImagePresent && (
          <div
            className="modalImage"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: 'var(--grayColor)',
              margin: 'auto',
              position: 'relative',
            }}
          >
            <input
              style={{
                display: 'none',
                position: 'absolute',
                left: '-50%',
                top: '50%',
                transform: 'translate(${50}px, ${50}px)',
              }}
              accept="image/*"
              className=""
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera
                  style={{
                    position: 'absolute',
                    left: '150%',
                    top: '150%',
                    padding: 0,
                    margin: 0,
                  }}
                />
              </IconButton>
            </label>
          </div>
        )}

        <form className="" noValidate autoComplete="off">
          <h5>Name</h5>
          <TextField
            style={{
              width: '100%',
              marginTop: '10px',
              marginBottom: '20px',
            }}
            id="outlined-basic"
            label=""
            variant="outlined"
          />

          {isCountPresent && (
            <>
              <h5>Count</h5>
              <TextField
                style={{
                  width: '100%',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
                id="outlined-basic"
                label=""
                variant="outlined"
              />
            </>
          )}

          {isSelectPresent && (
            <>
              <h5>{modalSelectTitle}</h5>
              <select
                style={{
                  width: '100%',
                  height: '3.7rem',
                  border: '1px solid var(--grayColor)',
                  marginTop: '10px',
                  marginBottom: '20px',
                  paddingLeft: '10px',
                  borderRadius: '5px',
                }}
                name=""
                id=""
              >
                <option value="">{modalSelectName}</option>
                <option value="dog">9</option>
              </select>
            </>
          )}
          <Button
            style={{
              width: '100%',
              marginTop: '10px',
              marginBottom: '20px',
              height: '3.8rem',
              backgroundColor: 'green',
            }}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ModalContent
