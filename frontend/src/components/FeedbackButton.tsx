'use client';

interface Props {
  type: 'button' | 'reset' | 'submit';
  isValid: boolean;
  text: string;
  submittingText?: string;
  isSubmitting?: boolean;
  feedback: string;
  feedBackColor?: string;
}

export default function FeedbackButton({
  isValid,
  type = 'button',
  isSubmitting,
  text,
  submittingText,
  feedback,
  feedBackColor,
}: Props) {
  const styles = `
    relative h-9 w-40 rounded-3xl font-medium text-white shadow-btn 
    disabled:cursor-not-allowed disabled:opacity-50 bg-[#62262E]
  `;

  const feedbackStyles = `
    absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap 
    rounded-md px-2 py-1 text-xs text-white opacity-0 
    transition-opacity group-hover:opacity-100 tracking-wide font-medium 
  `;

  return (
    <div className="group relative inline-block w-fit">
      <button className={styles} disabled={!isValid || isSubmitting} type={type}>
        {isSubmitting ? (submittingText ?? 'Enviando...') : text}
      </button>
      <span className={feedbackStyles} style={{ color: feedBackColor || '' }}>
        {feedback}
      </span>
    </div>
  );
}
