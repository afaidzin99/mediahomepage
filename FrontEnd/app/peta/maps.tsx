export default function Maps() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31562.08051162027!2d114.10022559901037!3d-8.570973994602404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd40862b5f04cb1%3A0x5a66100114ccae7a!2sBalai%20Desa%20Pesanggaran!5e0!3m2!1sen!2sid!4v1754027060074!5m2!1sen!2sid"
        className="w-full h-full"
        style={{ border: 0 }} // ✅ Diperbaiki
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
