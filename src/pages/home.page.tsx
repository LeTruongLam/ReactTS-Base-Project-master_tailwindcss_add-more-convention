import { Button } from '@/components/atoms/Button'
import CaretCircleRight from '@/components/atoms/icons/CaretCircleRight'

const Home = () => (
  <div className='flex gap-4'>
    <div>
      <Button>DEFAULT</Button>
    </div>

    <div>
      <Button variant='disabled'>DISABLED</Button>
    </div>

    <div>
      <Button variant='roundedFull'>
        <CaretCircleRight />
      </Button>
    </div>

    <div>
      <Button>
        <CaretCircleRight />

        <span>BUTTON WITH ICON</span>

        <CaretCircleRight />
      </Button>
    </div>

    <div>
      <Button variant='outline'>OUTLINE</Button>
    </div>
  </div>
)

export default Home
