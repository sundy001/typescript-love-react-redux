import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link, { Props as LinkProps } from '../components/Link';
import { State, VisibilityFilters } from '../reducers';

const mapStateToProps: MapStateToProps<{ active: LinkProps['active'] }, Props, State> = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps: MapDispatchToProps<{ onClick: LinkProps['onClick'] }, Props> = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export type Props = Readonly<{
  filter: VisibilityFilters
}>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
