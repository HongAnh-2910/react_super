const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Nguyen Chi Trung",
          age: 23,
          address: "Ha Noi",
        },
      });
    }, 2000);
  });
};

export default getUser;
