import React, { useState, useMemo } from "react";
import Container from "@mui/material/Container";
import Template from "../../template";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";
import { GQL_getSpells } from "../../common/Gql";
//redux
import { connect } from "react-redux";
//redux action
import {
  updateSpellList,
  updateFavouriteList,
} from "../../redux/modules/actions/SpellsAction";
import starOn from "../../static/images/starActive.png";
import starOff from "../../static/images/starOff.png";
import ExpandedComponent from "../../components/TableExpandedComponent";
import { Button, Tooltip } from "@mui/material";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: "5px",
}));

const tableCustomStyles = {
  headCells: {
    style: {
      color: "#ffff",
      fontSize: "12px",
      fontWeight: "bold",
      paddingLeft: "0px",
      justifyContent: "center",
      backgroundColor: "#704cd9",
    },
  },
};

const Home = (props) => {
  const { updateFavouriteList, favourites } = props;
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [toggleFavourite, setToggleFavourite] = useState(false);

  const { loading, error, data: spellList } = useQuery(GQL_getSpells);

  const columns = [
    {
      id: "level",
      name: "LEVEL",
      selector: (row) => row.level,
      sortable: true,
    },
    {
      id: "name",
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      id: "castingTime",
      name: "CASTING TIME",
      selector: (row) => row.casting_time,
      sortable: true,
    },
    {
      id: "duration",
      name: "DURATION",
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      id: "rangeArea",
      name: "RANGE/AREA",
      selector: (row) => row.range,
      sortable: true,
    },
    {
      id: "attackSave",
      name: "ATTACK TYPE",
      selector: (row) => row.attack_type || "NONE",
      sortable: true,
    },
    {
      id: "damageEffect",
      name: "DAMAGE/EFFECT",
      selector: (row) => row.damage?.damage_type?.name || "NONE",
      sortable: true,
    },
    {
      id: "favourites",
      name: "",
      cell: (row) => (
        <>
          {favourites.favourites.find((e) => e.index === row.index) ? (
            <img
              height="24px"
              width="24px"
              onClick={() =>
                handleChangeFavourite({
                  prevItems: favourites.favourites,
                  updateFavouriteList,
                  row,
                  active: true,
                })
              }
              alt={row.name}
              src={starOn}
            />
          ) : (
            <img
              height="24px"
              width="24px"
              onClick={() =>
                handleChangeFavourite({
                  prevItems: favourites.favourites,
                  updateFavouriteList,
                  row,
                  active: false,
                })
              }
              alt={row.name}
              src={starOff}
            />
          )}
        </>
      ),
    },
  ];

  //filter items
  const filteredItems = spellList?.spells
    ? spellList.spells.filter((item) => {
        if (toggleFavourite) {
          const test = favourites.favourites.findIndex((fav) => {
            return fav.index === item.index;
          });
          return (
            item.name &&
            item.name.toLowerCase().includes(filterText.toLowerCase()) &&
            test !== -1
          );
        }
        return (
          item.name &&
          item.name.toLowerCase().includes(filterText.toLowerCase())
        );
      })
    : [];

  //table sub header
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
        <Tooltip title="Toggle Favourites">
          <Button>
            <img
              height="24px"
              width="24px"
              onClick={() =>
                filterFavourites({ toggleFavourite, setToggleFavourite })
              }
              alt={"favouriteIcon"}
              src={toggleFavourite ? starOn : starOff}
            />
          </Button>
        </Tooltip>
      </>
    );
  }, [filterText, resetPaginationToggle, toggleFavourite]);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Template>
      <StyledContainer component="main" maxWidth="lg">
        <DataTable
          title="Spell List"
          columns={columns}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          data={filteredItems}
          highlightOnHover
          pointerOnHover
          pagination
          expandableRows
          persistTableHead
          expandableRowsComponent={ExpandedComponent}
          customStyles={tableCustomStyles}
          progressPending={loading}
        />
      </StyledContainer>
    </Template>
  );
};

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
  </>
);
/**
 *filter favourites
 */

const filterFavourites = (props) => {
  const { toggleFavourite, setToggleFavourite } = props;
  setToggleFavourite && setToggleFavourite(!toggleFavourite);
};

/**
 *update favourites
 */
const handleChangeFavourite = (props) => {
  const { prevItems, updateFavouriteList, row, active } = props;
  if (active) {
    updateFavouriteList({
      favourites: prevItems.filter((obj) => obj.index !== row.index),
    });
  } else {
    updateFavouriteList({ favourites: [...prevItems, row] });
  }
};

//===================================================
// 3.Export
//===================================================
/**
 * map state to props
 */
const mapStateToProps = (state) => {
  return {
    spells: state.spells,
    favourites: state.favourites,
  };
};
export default connect(mapStateToProps, {
  updateSpellList,
  updateFavouriteList,
})(Home);
