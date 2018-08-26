const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

const dataExample = () => {
    return {
        fullname: "John Doe",
        address: "237  School House Road, Bay Springs, MS, Mississippi",
        phone: "6017640848",
        email: "john@doe.com",
        zip_from: "39422",
        zip_to: "15933",
        vehicle_year: "2012",
        vehicle_make: "Tesla",
        vehicle_model: "Model 5",
        price: "2500"
    };
};

export function makeData (len = 50) {
    return range(len).map(() => {
        return {
            ...dataExample(),
            children: range(10).map(dataExample)
        };
    });
};