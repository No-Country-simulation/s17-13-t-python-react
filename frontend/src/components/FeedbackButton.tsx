'use client';

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
  const styles = `
    relative h-9 w-40 rounded-3xl bg-black font-medium text-white shadow-btn 
    disabled:cursor-not-allowed disabled:opacity-50
  `;

  const feedbackStyles = `
    absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap 
    rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 
    transition-opacity group-hover:opacity-100 tracking-wide font-medium
  `;

  return (
    <div className="group relative inline-block">
      <button className={styles} disabled={!isValid || isSubmitting} type={type}>
        {isSubmitting ? (submittingText ?? 'Enviando...') : text}
      </button>
      <span className={feedbackStyles}>{feedback}</span>
    </div>
  );
}
