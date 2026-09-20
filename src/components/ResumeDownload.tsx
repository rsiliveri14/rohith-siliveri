import type { ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { RESUME_FILENAME, RESUME_HREF } from '@/lib/site';

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = RESUME_HREF;
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const ResumeDownload = ({ children }: { children: ReactNode }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Download resume?</AlertDialogTitle>
        <AlertDialogDescription>
          This will save {RESUME_FILENAME} to your computer.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={downloadResume}>Download</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default ResumeDownload;
