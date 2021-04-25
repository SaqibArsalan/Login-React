import { getFromLocal } from './Cache';

export function getAuthOptions(isFormData = false) {
  const token = getFromLocal('auth');
  let headers = {
    "Authorization": `Bearer ${token}`
  };
  if(isFormData) headers["Content-Type"] = "multipart/form-data"
  return { headers };
}
