import PropTypes from 'prop-types';

function SectionTop({title, quote, children}) {
  return ( 
    <section className="w-full">
      <div className="bg-purple-gradient p-5 md:p-10 flex flex-col items-center justify-center gap-5">
        <h2 className="text-title text-accent">
          {title}
        </h2>
        {children}
        <p className='text-white text-lg font-medium max-w-[900px] text-justify'>
          {quote}
        </p>
      </div>
    </section>
  );
}

SectionTop.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string,
  children: PropTypes.node,
};

export default SectionTop;