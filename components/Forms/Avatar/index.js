import React, { useState, useCallback } from 'react';
import { faFileImage, faFile, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import { Spinner } from 'react-bootstrap';
import Label from '../../Label';
import Button from '../../Button';
import styles from './Avatar.module.scss';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import apiPost from '../../../services/apiPost';

function Avatar() {
  const [isFile, setIsFile] = useState(false);
  const [session] = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onDrop = useCallback((acceptedFiles) => {
    setIsFile(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/jpeg, image/png, image/jpg',
  });

  const removeFile = (e, file) => {
    e.stopPropagation();
    acceptedFiles.splice(file, 1);
    setIsFile(false);
  };

  const handleSubmitImage = async () => {
    setIsLoading(true);
    const secure_url = await sendToCloudinary();
    const headers = {
      Authorization: `Bearer ${session?.user?.auth}`,
    };
    const body = {
      id: session?.user?.sub,
      avatar: secure_url,
    };
    const res = await apiPost('/update_user_avatar', body, headers);
    if (res?.data.status === 1) {
      router.push({
        pathname: '/profile',
      });
    } else {
      alert('There was an error. We apologize for the inconvenience.');
      setIsLoading(false);
    }
  };

  const sendToCloudinary = async () => {
    const data = new FormData();
    data.append('file', acceptedFiles[0]);
    data.append('upload_preset', 'next_app_profile_pic');
    data.append('api_key', process.env.cloudinaryApiKey);
    data.append('api_secret', process.env.cloudinaryApiSecret);
    data.append('cloud_name', 'dymuj0sqw');

    const res = await fetch(' https://api.cloudinary.com/v1_1/dymuj0sqw/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((res) => {
        return res.secure_url;
      })
      .catch((err) => {
        alert('Sorry there was an error with the server, try again later.');
        console.log(err);
      });
    return res;
  };
  return (
    <React.Fragment>
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center p-3"
          style={{ minHeight: '264px' }}
        >
          <Spinner animation="grow" size="lg" />
        </div>
      ) : (
        <React.Fragment>
          <Label classnames="my-3">Add a profile picture</Label>
          <div {...getRootProps()}>
            <div className={styles.InputContainer}>
              {isDragActive ? (
                <div className="d-flex align-items-center justify-content-between">
                  <p className="main-font font-size-16 wt-500 green-1">Drop your file here ...</p>
                  <FontAwesomeIcon icon={faFileImage} size="2x" className="main" />
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-between">
                  {isFile ? (
                    <p>
                      <span className="main-font font-size-16 wt-300 dark">
                        {acceptedFiles[0].name}
                      </span>{' '}
                      <span
                        className="sub-font red-1 wt-300 cursor-pointer"
                        role="button"
                        onClick={(e) => removeFile(e, acceptedFiles[0])}
                      >
                        <FontAwesomeIcon icon={faTimes} className="ms-1" />
                      </span>
                    </p>
                  ) : (
                    <p className="main-font font-size-16 wt-300 dark">
                      Drag or click to add your file
                    </p>
                  )}
                  <FontAwesomeIcon icon={faFile} size="2x" className="main" />
                </div>
              )}
              <input {...getInputProps()} />
            </div>
          </div>
          <Button classnames="m-3" onClick={handleSubmitImage}>
            View your profile
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Avatar;
