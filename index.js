const formatDate = (timeInSeconds) => {
    const seconds = timeInSeconds%60;
    const minutes =  Math.floor(timeInSeconds/60);

    if (timeInSeconds == null) {
        return `0s`;
    } else if (timeInSeconds < 60 ) {
        return `${timeInSeconds}s`;
    } else if (timeInSeconds < 3600) {
        if(seconds === 0) {
            return `${minutes}m`;
        }
        return `${minutes}m ${seconds}s`
    }
    
    if (minutes >= 60) {
        const hours = Math.floor(minutes/60);
        const minute = minutes%60;
        
        if(minute ===0 && seconds === 0) {
            return `${hours}h`
        } else if(seconds === 0) {
            return `${hours}h ${minute}m`
        } else if(minute === 0) {
            return `${hours}h ${seconds}s`;
        } else {
            return `${hours}h ${minute}m ${seconds}s`;
        }
    }

    return `${timeInSeconds}s`;
  }
  
  module.exports = formatDate;