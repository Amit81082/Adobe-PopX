const MobileFrame = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-93.75 h-180 bg-white rounded-[28px] shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
export default MobileFrame;