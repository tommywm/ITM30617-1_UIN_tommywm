import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const Search = ({ search, setSearch, fetchData }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    fetchData();
  };
  const handleSubmitbutton = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmitbutton}>
          <fieldset>
            <label htmlFor="search">
              <span className="button">
                <FaSearch aria-label="search" />
              </span>
              <input
                type="text"
                id="search"
                value={search}
                placeholder="Skriv inn en film vil du søke etter.."
                onChange={handleSubmit}
              />
            </label>
          </fieldset>
        </form>
      </section>
    </>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Search;
