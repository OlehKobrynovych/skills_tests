import './PreloaderCustom.css';

function PreloaderCustom({
  newStyle = null,
  isNewStyleLoader = false,
  progressVideo = null,
  fullPreloader = '',
}) {
  return (
    <div className="loader-wrap" style={newStyle}>
      <div className={`loader ${isNewStyleLoader ? 'loader--new-style' : ''}`}></div>
      {progressVideo > 0 && (
        <div className="loader__progress-wrap">
          <div className="loader__progress">
            <div>{progressVideo}% Video upload</div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreloaderCustom;
