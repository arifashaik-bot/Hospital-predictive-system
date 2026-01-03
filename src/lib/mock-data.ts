export const admissionsForecast = [
  { date: "Jan 3", actual: 145, predicted: 148, lower: 135, upper: 161 },
  { date: "Jan 4", actual: 152, predicted: 155, lower: 142, upper: 168 },
  { date: "Jan 5", actual: 168, predicted: 172, lower: 158, upper: 186 },
  { date: "Jan 6", actual: null, predicted: 189, lower: 172, upper: 206 },
  { date: "Jan 7", actual: null, predicted: 201, lower: 183, upper: 219 },
  { date: "Jan 8", actual: null, predicted: 195, lower: 178, upper: 212 },
  { date: "Jan 9", actual: null, predicted: 178, lower: 162, upper: 194 },
  { date: "Jan 10", actual: null, predicted: 165, lower: 150, upper: 180 },
];

export const icuOccupancy = [
  { date: "Jan 3", occupancy: 72, beds: 36, total: 50 },
  { date: "Jan 4", occupancy: 78, beds: 39, total: 50 },
  { date: "Jan 5", occupancy: 82, beds: 41, total: 50 },
  { date: "Jan 6", occupancy: 88, beds: 44, total: 50 },
  { date: "Jan 7", occupancy: 92, beds: 46, total: 50 },
  { date: "Jan 8", occupancy: 90, beds: 45, total: 50 },
  { date: "Jan 9", occupancy: 84, beds: 42, total: 50 },
  { date: "Jan 10", occupancy: 76, beds: 38, total: 50 },
];

export const staffWorkload = [
  { shift: "Morning", doctors: 85, nurses: 92, support: 78 },
  { shift: "Afternoon", doctors: 78, nurses: 85, support: 72 },
  { shift: "Night", doctors: 95, nurses: 98, support: 88 },
];

export const weeklyStaffTrend = [
  { day: "Mon", workload: 78 },
  { day: "Tue", workload: 82 },
  { day: "Wed", workload: 85 },
  { day: "Thu", workload: 88 },
  { day: "Fri", workload: 95 },
  { day: "Sat", workload: 92 },
  { day: "Sun", workload: 85 },
];

export const alerts = [
  {
    id: 1,
    severity: "critical",
    title: "ICU Capacity Alert",
    message: "ICU occupancy projected to reach 92% on Friday. Consider activating overflow protocols.",
    action: "Increase ICU beds by 10% by Thursday",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    severity: "warning",
    title: "Staff Shortage Warning",
    message: "Night shifts will be understaffed during the festival week (Jan 12-15).",
    action: "Schedule extra nursing staff for weekend night shifts",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    severity: "warning",
    title: "Emergency Surge Expected",
    message: "Next week, emergency cases may increase by 30% due to flu season.",
    action: "Prepare additional emergency bay capacity",
    timestamp: "6 hours ago",
  },
  {
    id: 4,
    severity: "info",
    title: "Air Quality Impact",
    message: "Prepare for a 20% rise in respiratory cases next week due to high pollution levels.",
    action: "Stock additional respiratory medications",
    timestamp: "8 hours ago",
  },
];

export const dataFactors = [
  { name: "Historical Admissions", weight: 35, trend: "up" },
  { name: "Flu Season Index", weight: 25, trend: "up" },
  { name: "Weather (Cold Snap)", weight: 15, trend: "up" },
  { name: "Local Events", weight: 12, trend: "neutral" },
  { name: "Air Quality Index", weight: 13, trend: "up" },
];

export const departmentStats = [
  { name: "Emergency", current: 45, capacity: 60, trend: 12 },
  { name: "ICU", current: 41, capacity: 50, trend: 8 },
  { name: "Surgery", current: 28, capacity: 35, trend: -3 },
  { name: "Pediatrics", current: 22, capacity: 30, trend: 5 },
  { name: "Cardiology", current: 18, capacity: 25, trend: 2 },
];
