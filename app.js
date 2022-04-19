function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? "" : "s"}`;
  }
  if (seconds >= 60 && seconds < 3600) {
    if (seconds % 60 == 0) {
      return `${seconds / 60} minutes`
    } else {
        let min = Math.floor(seconds / 60);
        seconds = Math.floor((seconds - (min * 60)));
          return `${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds === 1 ? "" : "s"}`;
    }
  }
  if (seconds >= 3600 && seconds < 86400) {
    if (seconds % 60 == 0){ 
      if (seconds / 3600 === 1) {
          return `${seconds / 3600} hour`
      } else {
          return `${seconds / 3600} hours`  
      }
    } else{
        let hour = Math.floor(seconds / 3600);
        let min = Math.floor((seconds - (hour * 3600)) / 60);    
        seconds = Math.floor((seconds - (hour * 3600) - (min * 60)));
          return `${hour} hour${hour === 1 ? "" : "s"}, ${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds === 1 ? "" : "s"}`;
    }
  }
  if (seconds>= 86400 && seconds < 31536000) {
    let day = Math.floor(seconds / (86400));
    let hour = Math.floor((seconds - (day * 86400)) / 3600);
    let min = Math.floor((seconds - (day * 86400) - (hour * 3600)) / 60);
    seconds = Math.floor((seconds - (day * 86400) - (hour * 3600) - (min * 60)));
    if (hour === 0) {
      return `${day} day${day === 1 ? "" : "s"}, ${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds == 1 ? "" : "s"}`;
    } else if (min === 0) {
        return `${day} day${day === 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"} and ${seconds} second${seconds == 1 ? "" : "s"}`; 
    } else if (seconds === 0) {
        return `${day} day${day === 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"} and ${min} minute${min === 1 ? "" : "s"}`;
    } else {
        return `${day} day${day === 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"}, ${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds == 1 ? "" : "s"}`;
    }
  }
  if (seconds >= 31536000) {
    let year = Math.floor(seconds / 31536000);
    let day = Math.floor((seconds - (year * 31536000)) / 86400);
    let hour = Math.floor((seconds - (year * 31536000) - (day * 86400)) / 3600);
    let min = Math.floor((seconds - (year * 31536000) - (day * 86400) - (hour * 3600)) / 60);
    seconds = Math.floor((seconds - (year * 31536000) - (day * 86400) - (hour * 3600) - (min * 60)));
    if (day === 0) {
      return `${year} year${year === 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"}, ${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds === 1 ? "" : "s"}`;
    } else if (hour === 0) {
        return `${year} year${year === 1 ? "" : "s"}, ${day} day${day == 1 ? "" : "s"}, ${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds === 1 ? "" : "s"}`;
    } else if (min === 0) {
        return `${year} year${year === 1 ? "" : "s"}, ${day} day${day == 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"} and ${seconds} second${seconds === 1 ? "" : "s"}`;
    } else if (seconds === 0) {
      return `${year} year${year === 1 ? "" : "s"}, ${day} day${day == 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"} and ${min} minute${min === 1 ? "" : "s"}`; 
    } else {
      return `${year} year${year === 1 ? "" : "s"}, ${day} day${day == 1 ? "" : "s"}, ${hour} hour${hour === 1 ? "" : "s"}, ${min} minute${min === 1 ? "" : "s"} and ${seconds} second${seconds === 1 ? "" : "s"}`;
    }
  }
}