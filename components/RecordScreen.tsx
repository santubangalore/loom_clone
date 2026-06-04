"use client"
import {useRef,useState} from 'react';
import {useRouter} from 'next/navigation';

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
  }
  
  const gotoUpload=()=>{
    if (recordedBlob) {
      router.push("/upload");
    }
  }
  
  return (
    <div className="record">
      <button className="primary-btn" onClick={()=>setIsOpen(true)}>
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
          <div className="overlay-record" onClick={()=>closeModal()}>
          <div className="modal-content bg-white p-8 rounded-2xl shadow-xl z-50 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Record Screen</h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Image src="/assets/icons/logout.svg" alt="close" width={24} height={24} className="rotate-180" />
              </button>
            </div>
         </div>

            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6 flex items-center justify-center border-4 border-gray-100">
              {recordedVideoUrl ? (
                <video 
                  ref={videoRef} 
                  src={recordedVideoUrl} 
                  controls 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}>
                    <div className="w-6 h-6 bg-white rounded-sm" />
                  </div>
                  <p className="text-gray-400 font-medium">
                    {isRecording ? `Recording... ${recordingDuration}s` : "Ready to start recording"}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {!isRecording && !recordedVideoUrl && (
                <button className="primary-btn w-full justify-center py-4 text-lg" onClick={handleStart}>
                  Start Capturing
                </button>
              )}
              
              {isRecording && (
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2" onClick={stopRecording}>
                  <span className="w-3 h-3 bg-white rounded-full animate-ping" />
                  Stop Recording
                </button>
              )}

              {recordedVideoUrl && !isRecording && (
                <div className="flex gap-4">
                  <button className="secondary-btn flex-1 justify-center py-4" onClick={recordAgain}>Record Again</button>
                  <button className="primary-btn flex-1 justify-center py-4" onClick={gotoUpload}>Confirm & Upload</button>
                </div>
              )}
            </div>
          </div>
        </section>
      )
      
      }
    </div>
  );
};
export default RecordScreen;
