import { toast } from '@zerodevx/svelte-toast';

export const successToast = (message: string) =>
  toast.push(message, {
    theme: {
      '--toastColor': 'mintcream',
      '--toastBackground': 'rgba(72,187,120,0.9)',
      '--toastBarHeight': 0,
    },
  });

export const warningToast = (message: string) =>
  toast.push(message, {
    theme: {
      '--toastBackground': 'yellow',
      '--toastColor': 'white',
      '--toastBarHeight': 0,
    },
  });
export const errorToast = (message: string) =>
  toast.push(message, {
    theme: {
      '--toastBackground': 'red',
      '--toastColor': 'white',
      '--toastBarHeight': 0,
    },
  });
