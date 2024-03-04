
import './styles.css';

export default function QuesRadio() {

    return (
        <div className="ques-radio">

			<div className="dpx">
				
				<div className='px'>
  		
					<label>
    					<input type="checkbox" className="option-input checkbox" />Checkbox
  					</label>

  					<label>
    					<input type="checkbox" className="option-input checkbox" />Checkbox
					</label>

  					<label>
						<input type="checkbox" className="option-input checkbox" />Checkbox
					</label>
				
				</div>

				<div className='py'>
  					<label>
    					<input type="radio" className="option-input radio" name="example" />Radio option
  					</label>

  					<label>
    					<input type="radio" className="option-input radio" name="example" />Radio option
  					</label>
  
  					<label>
						<input type="radio" className="option-input radio" name="example" />Radio option
  					</label>
				</div>

			</div>

        </div>
    );
}