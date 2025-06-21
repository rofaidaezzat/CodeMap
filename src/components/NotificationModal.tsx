
interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
    if (!open) return null;

    return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-[#2F174E]/70 to-[#371F5A]/80 flex justify-center items-center z-50 transition-all duration-300">
        <div className="bg-white border-2 border-purple-400 shadow-2xl rounded-2xl w-[400px] relative p-8 animate-fadeIn">
        <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#2F174E] text-white text-2xl font-bold shadow-md hover:bg-[#DE00A5] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Close modal"
        >
            &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
