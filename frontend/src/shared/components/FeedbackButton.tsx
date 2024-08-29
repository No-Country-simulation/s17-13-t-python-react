'use client';

import transformCharacters from '@/utils/transformCharacters';

interface Props {
  type: 'button' | 'reset' | 'submit';
  isValid: boolean;
  text: string;
  submittingText?: string;
  isSubmitting?: boolean;
  feedback: string;
}

export default function FeedbackButton({
  isValid,
  type = 'button',
  isSubmitting,
  text,
  submittingText,
  feedback,
}: Props) {
  const formatFeedback = `after:content-['${transformCharacters({
    target: feedback,
    newValue: ' ',
    oldValue: '_',
  })}']`;
  const styles = `relative h-9 w-40 rounded-3xl bg-black font-medium text-white shadow-btn after:pointer-events-none after:absolute after:left-1/2 after:top-full after:mt-2 after:-translate-x-1/2 after:whitespace-nowrap after:rounded-md after:bg-gray-800 after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:transition-opacity  disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:after:opacity-100 ${formatFeedback}`;

  console.log(feedback);

  return (
    <button className={styles} disabled={!isValid || isSubmitting} type={type}>
      {isSubmitting ? (submittingText ?? 'Enviando...') : text}
    </button>
  );
}
