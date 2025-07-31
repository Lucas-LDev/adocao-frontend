import PropTypes from 'prop-types';

function SectionTop({children}) {
  return ( 
    <section className="w-full">
      <div className="bg-purple-gradient p-5 md:p-10 flex flex-col items-center justify-center gap-5">
        {children}
      </div>
    </section>
  );
}

SectionTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTop;