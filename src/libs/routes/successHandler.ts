export default (message: string, status: number, data: any) => ({
  message: message || 'Success',
  status: status || 200,
  success: 'OK',
  data
});
