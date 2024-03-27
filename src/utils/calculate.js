
export const activityHistory = [
  { taskName: 'Task 1', startTime: '2024-03-28T09:00:00', stopTime: '2024-03-28T09:30:00', duration: 30 },
];

export const calculateTotalTimeSpent = (startTime, endTime) => {
  let totalTime = 0;
  for (const activity of activityHistory) {
    if (activity.startTime >= startTime && activity.stopTime <= endTime) {
      totalTime += activity.duration;
    }
  }
  return totalTime;
};


export const LOGO_IMG ="https://www.iconsdb.com/icons/preview/royal-azure-blue/triangle-xxl.png"