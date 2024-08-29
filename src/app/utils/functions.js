export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  const thaiOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("th-TH", thaiOptions);
  const formattedTime = date.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const timeDifference = now - date;
  const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  if (timeDifference < 60 * 1000) {
    return "เมื่อสักครู่";
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutes = Math.floor(timeDifference / (60 * 1000));
    return `${minutes} นาที`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    return `${hours} ชม.`;
  } else if (
    daysDifference === 1 ||
    (daysDifference === 2 && now.getDate() === date.getDate())
  ) {
    return "1 วัน";
  } else {
    return `${formattedDate} , ${formattedTime} น.`;
  }
};
