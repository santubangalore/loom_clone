"use client"
import {useRef,useState} from 'react';
import {useRouter} from 'next/navigation';
import {ICONS} from '../constants';

import Image from "next/image";
import { useScreenRecording } from '@/lib/hooks/useScreenRecording';

const RecordScreen = () => {
  const router= useRouter();
  const [isOpen,setIsOpen]= useState(false);
  const videoRef= useRef<HTMLVideoElement>(null);
  const {
    isRecording,
    recordedBlob,
    resetRecording,
    recordedVideoUrl,
    recordingDuration,
    startRecording,
    stopRecording
    } =useScreenRecording();
  
  const closeModal=()=>{
    setIsOpen(false);
  }
  
  const handleStart=async ()=>{
    await startRecording();
  }
  
  const recordAgain= async ()=>{
    resetRecording();
    await startRecording();
    if(recordedVideoUrl && videoRef.current) {
      videoRef.current.src=recordedVideoUrl;
    }
  }
  
  const gotoUpload=()=>{
    if (recordedBlob) {
      router.push("/upload");
    }
  }
  
  return (
    <div className="record">
      <button className="primary-btn" onClick={() => setIsOpen(true)}>
        <Image
          src="/assets/icons/record.svg"
          alt="record"
          height={16}
          width={16}
        />
        <span>Record a video</span>
      </button>
      {isOpen && (
        <section className="dialog">
          <div className="overlay-record" onClick={closeModal}>
            <div className="dialog-content">
              <figure>
                <h3>Screen recording</h3>
                <button onClick={closeModal}>
                  <Image src ={ICONS.close} height={24} width={24}  alt="close"></Image>
                </button>
              </figure>
              <section>
                {isRecording ? (
                <article>
                  <div />
                  <span>Recording in progress.</span>  
                </article>
                ):recordedVideoUrl ? (
                  <video ref={videoRef} 
                  src={recordedVideoUrl}
                  controls
                  ></video>
                ):(<p>
                  Click start to start recording yr screen.
                </p>)}
              </section>
              <div className="record-box">
                {!isRecording && !recordedVideoUrl &&    
                 (
                   <button onClick={handleStart} className="record-start">
                  
                  <Image src={ICONS.record} height={24} width={24} alt="record"/>Record
                  </button>
                   ) 
                 }
                 {isRecording && (
                  <button onClick={stopRecording} className="record-stop">
                    <Image src={ICONS.record} height={20} width={20} alt="stop" />
                    Stop Recording
                  </button>
                 )}
                 {recordedVideoUrl && (
                  <div>
                    <button onClick={recordAgain} className="record-again">Record again </button>
                    <button onClick={gotoUpload}>
                      <Image src={ICONS.upload} alt="" height={16} width={16}></Image>
                      Continue to upload
                    </button>
                  </div>
                 )}
              </div>
            </div>
          </div>
        </section>
       )
     }
    </div>
  );
};
export default RecordScreen;
