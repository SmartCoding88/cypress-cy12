import Stepper from "./Stepper"

describe('<Stepper>', () => {

  //Set initial declarations
  const stepperSelector = "[data-testid=stepper]";
  const incrementSelector = "[aria-label=increment]";
  const decrementSelector = "[aria-label=decrement]";
  //test initial =0
  it("Stepper should default to 0", ()=>{

    //Arrange
    cy.mount(<Stepper />);
    //Assert
    cy.get(stepperSelector).should("contain.text",0);

  });
  it('Supports an "initial" prop to set the value',()=>{
    //Arrange
    cy.mount(<Stepper initial={100} />);
    //Action
    cy.get(stepperSelector).should("contain.text",100);
    
  });

  //test a button click
  it("Can be incremented",()=>{
    cy.mount(<Stepper />);
    cy.get(incrementSelector).click();
    //Assert
    cy.get(stepperSelector).should("contain.text",1)
  });

  it("Can be decremented",()=>{
    cy.mount(<Stepper />);
    cy.get(decrementSelector).click();
    //Assert
    cy.get(stepperSelector).should("contain.text",-1)
  });

  it('mounts', () => {
     cy.mount(<Stepper />);
     
  });

})