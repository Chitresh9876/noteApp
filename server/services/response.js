export const failtureResponse = (message) =>{
    return (
        {
            success: false,
            message: message,
        }
    );
}


export const successResponse = (message) => {
  return {
    success: true,
    message: message,
  };
};