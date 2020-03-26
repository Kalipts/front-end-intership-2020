const isWeekend = day => {
  const dayName = day.format('ddd');
  return dayName === 'Sun' || dayName === 'Sat';
};
export const validate = (startDay, endDay, project) => {
  const errors = {};
  if (isWeekend(startDay)) {
    errors.startDay = `Non-working day. Please change the date.`;
  } else if (isWeekend(endDay)) {
    errors.endDay = `Non-working day. Please change the date.`;
  }
  if (project.name === '') {
    errors.project = `Required Project`;
  }
  return errors;
};
