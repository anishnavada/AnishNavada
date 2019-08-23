import React from "react"

class OverflowAlert extends React.Component{
	
	render(){
		return (
		   <div id="player-overflow" className="modal" tabindex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Error!</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <p>Sorry! You can not add more than 3 players to the Compare Page</p>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
			</div>
		)
	}
	
}

export default OverflowAlert