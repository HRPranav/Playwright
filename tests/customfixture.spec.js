import { test, expect} from '../Fixtures/customlogindata.js'

test("Custom Fixture", async ({Loggedinuser}) =>
{
  await Loggedinuser.click("#add-to-cart-sauce-labs-backpack");
  await Loggedinuser.click(".shopping_cart_container");
})