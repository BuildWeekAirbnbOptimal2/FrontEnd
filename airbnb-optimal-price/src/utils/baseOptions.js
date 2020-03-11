let baseOptions = {
  cancellation_policy: {
    strict: "Strict",
    moderate: "Moderate",
    flexible: "Flexible"
  },
  property_type: {
    Guesthouse: "Guesthouse",
    Apartment: "Apartment",
    Condominium: "Condominium",
    Loft: "Loft",
    Hostel: "Hostel",
    Bed_and_breakfast: "Bed and Breakfast",
    Other: "Other"
  },
  room_type: {
    "Entire_home/apt": "Entire Home/Apt",
    Private_room: "Private Room",
    Shared_room: "Shared Room"
  },
  Neighbourhood_group_cleansed: {
    Friedrichshain_Kreuzberg: "City",
    Country: "Country",

  },
  bed_type: {
    Queen: "Queen",
    Bunk_Bed: "Bunk Bed"
  }
};

export function mapBaseOption(option, cb) {
  let arr = [];
  Object.keys(baseOptions[option]).map(key => {
    arr.push(cb({ value: key, label: baseOptions[option][key] }));
  });
  return arr;
}

export function getBaseOptionValue(option, key) {
  return baseOptions[option][key] || key;
}