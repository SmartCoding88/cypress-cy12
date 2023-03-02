import Stepper from "./Stepper"

describe('<Stepper>', () => {

  //Set initial declarations
  const stepperSelector = "[data-testid=stepper]";
  const incrementSelector = "[aria-label=increment]";
  const decrementSelector = "[aria-label=decrement]"; 
  
  it('Mounts', () => {
     cy.mount(<Stepper />);
     
  });
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

 //more general use cases
 it("Has an initial counter that can be incremented and decremented",()=>{

  cy.mount(<Stepper initial={100} />);
  cy.get(stepperSelector).should("contain.text",100);
  cy.get(incrementSelector).click();
  cy.get(stepperSelector).should("contain.text",101);
  cy.get(decrementSelector).click().click();
  cy.get(stepperSelector).should("contain.text",99)

 });

 //Spy
 it("Fire a Change event with the increment value by click", ()=>{
  //Arrange
  const onChangeSpy = cy.spy().as("onChangeSpy");
  cy.mount(<Stepper onChange={onChangeSpy} />);

  //Action
  cy.get(incrementSelector).click();
  //Assert
  cy.get("@onChangeSpy").should("have.been.calledOnceWith", 1);
 });

 it("Fire a Change event with the decrement value by click", ()=>{
  //Arrange
  const onChangeSpy = cy.spy().as("onChangeSpy");
  cy.mount(<Stepper onChange={onChangeSpy} />);

  //Action
  cy.get(decrementSelector).click();
  //Assert
  cy.get("@onChangeSpy").should("have.been.calledOnceWith", -1);
 })

})