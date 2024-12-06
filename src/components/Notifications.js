// src/components/Notifications.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const notifySuccess = (message) => toast.success(message);
export const notifyError = (message) => toast.error(message);
