import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { Calendar } from './ui/calendar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, Check, Calendar as CalendarIcon, Phone, Truck } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { DateRange } from 'react-day-picker';

const toolImages: Record<string, string> = {
  'excavator-mini': 'https://images.unsplash.com/photo-1652922660696-60c68ec51582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBleGNhdmF0b3J8ZW58MXx8fHwxNzYzNjg2MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'skid-steer': 'https://images.unsplash.com/photo-1630628535113-e1cc025c8c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lkJTIwc3RlZXIlMjBsb2FkZXJ8ZW58MXx8fHwxNzYzNjg2MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'jackhammer': 'https://images.unsplash.com/photo-1582284168532-ef7b89baa1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWNraGFtbWVyJTIwZGVtb2xpdGlvbnxlbnwxfHx8fDE3NjM2ODYyODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'pressure-washer': 'https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hlcnxlbnwxfHx8fDE3NjM2ODYyODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'concrete-mixer': 'https://images.unsplash.com/photo-1690719744562-249937b9c03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMG1peGVyfGVufDF8fHx8MTc2MzYxODc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'plate-compactor': 'https://images.unsplash.com/photo-1729944950511-e9c71556cfd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0ZSUyMGNvbXBhY3RvcnxlbnwxfHx8fDE3NjM2ODYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'generator-7500': 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdlbmVyYXRvcnxlbnwxfHx8fDE3NjM2ODYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'scaffold-set': 'https://images.unsplash.com/photo-1635961365604-c001fd0ea2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FmZm9sZCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM2ODYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'post-hole-digger': 'https://images.unsplash.com/photo-1551868561-f2cdee310ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdlciUyMGRyaWxsfGVufDF8fHx8MTc2MzY4NjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  'carpet-cleaner': 'https://images.unsplash.com/photo-1644743694668-920c3e5d05b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBjbGVhbmVyfGVufDF8fHx8MTc2MzY4NjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'chainsaw': 'https://images.unsplash.com/photo-1474742817425-9f91918183b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpbnNhd3xlbnwxfHx8fDE3NjM2ODYyODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'electric-hand-planner': 'https://static.carson-rentals.com/images/electric-hand-planer.jpg',
  'jig-saw': 'https://static.carson-rentals.com/images/jig-saw.jpg',
  'large-wood-router': 'https://static.carson-rentals.com/images/wood-router.jpg',
  'oscillating-tool': 'https://static.carson-rentals.com/images/osilating-tool.jpg',
  'table-saw': 'https://static.carson-rentals.com/images/table-saw.jpg',
  'track-saw': 'https://static.carson-rentals.com/images/track-saw.jpg',
  'dremel': 'https://static.carson-rentals.com/images/dremel.jpg',
  'angle-grinder': 'https://static.carson-rentals.com/images/angle-grinder.jpg',
  'finish-nailer': 'https://static.carson-rentals.com/images/brad-finish-nailer.jpg',
  'straight-nailer': 'https://static.carson-rentals.com/images/straight-nailer.jpg',
  'crown-stapler': 'https://static.carson-rentals.com/images/crown-stapler.jpg',
  'pancake-compressor': 'https://static.carson-rentals.com/images/pancake-compressor.jpg',
  'tile-saw': 'https://static.carson-rentals.com/images/tile-saw.jpg',
  'drill-drain-cleaner': 'https://static.carson-rentals.com/images/drain-clearer.jpg',
  'carpet-kicker': 'https://static.carson-rentals.com/images/carpet-kicker.jpg',
  'carpet-stretcher': 'https://static.carson-rentals.com/images/carpet-strecher.jpg',
  'carpet-seamer': 'https://static.carson-rentals.com/images/carpet-seamer.jpg',
  'hand-truck': 'https://static.carson-rentals.com/images/hand-truck.jpg',
  'vacuum': 'https://static.carson-rentals.com/images/vacuum.jpg',
  'circular-saw': 'https://static.carson-rentals.com/images/circular-saw.jpg',
  'miter-saw': 'https://static.carson-rentals.com/images/miter-saw.jpg',
  'reciprocating-saw': 'https://static.carson-rentals.com/images/recepricating-saw.jpg',
  'drill': 'https://static.carson-rentals.com/images/drill.jpg',
  'impact-drill': 'https://static.carson-rentals.com/images/impact-drill.jpg',
};

export function ToolDetailPage() {
  const { toolId } = useParams();
  const tool = tools.find(t => t.id === toolId);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!tool) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center">Tool not found</h1>
        <div className="text-center mt-4">
          <Link to="/tools" className="text-[#0076A8] hover:underline">
            Back to all tools
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmitReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dateRange?.from || !dateRange?.to) {
      alert('Please select rental dates');
      return;
    }
    
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }

    // Format dates
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const formatPhoneNumber = (number: string): string => {
      let pieces = number.split('')

      if (number.length == 10 && /^[a-zA-Z0-9]*$/.test(number)) {
        return `(${pieces.slice(0, 3).join('')}) ${pieces.slice(3, 6).join('')}-${pieces.slice(6).join('')}`
      }

      return number
    };

    let dateFromFormatted = formatDate(dateRange.from)
    let dateToFormatted = formatDate(dateRange.to)
    let phoneNumberFormatted = formatPhoneNumber(phoneNumber)

    try {
      let response = await fetch('http://api.carson-rentals.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'mKi5zHscDQcaZAXTStDlvr367qBwamZ7',
        },
        body: JSON.stringify({
          tool_id: toolId,
          phone_number: phoneNumberFormatted,
          from: dateRange.from,
          to: dateRange.to
        })
      })
  
      if (!response.ok) {
        alert(
          'There was an error with your request! - Please contact (775) 671-1945 to reserve your equipment.'
        );
      } else {
        alert(
          `Reservation request submitted! We'll contact you at ${phoneNumberFormatted} to confirm your rental of ${tool.name} from ${dateFromFormatted} to ${dateToFormatted}.`
        );

        // Reset form
        setDateRange(undefined);
        setPhoneNumber('');
      }
    } catch (error) {
        alert(
          'There was an error with your request! - Please contact (775) 671-1945 to reserve your equipment.'
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/tools"
        className="inline-flex items-center gap-2 text-[#0076A8] hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all tools
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Tool Info */}
        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-6">
            <ImageWithFallback
              src={toolImages[tool.id]}
              alt={tool.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="inline-block px-3 py-1 bg-[#F2B134] text-[#0076A8] rounded-full text-sm mb-3">
            {tool.category}
          </div>
          
          <h1 className="mb-4 text-[#0076A8]">{tool.name}</h1>
          
          <p className="text-gray-600 mb-6">{tool.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#0076A8] text-white p-4 rounded-lg">
              <div className="text-sm opacity-90">Daily Rate</div>
              <div className="text-2xl">${tool.dailyRate}</div>
            </div>
            <div className="bg-[#F2B134] text-[#0076A8] p-4 rounded-lg">
              <div className="text-sm opacity-90">Weekly Rate</div>
              <div className="text-2xl">${tool.weeklyRate}</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="mb-4 text-[#0076A8]">Specifications</h3>
            <ul className="space-y-2">
              {tool.specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#F2B134] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F2B134] bg-opacity-10 border border-[#F2B134] rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Truck className="w-6 h-6 text-[#0076A8]" />
              <div>
                <h4 className="text-[#0076A8] mb-1">Free Local Delivery Available</h4>
                <p className="text-gray-700 text-sm">
                  We can deliver this equipment directly to your job site or home. 
                  Ask about delivery when we contact you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div>
          <div className="bg-white border-2 border-[#0076A8] rounded-xl p-8 sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <CalendarIcon className="w-6 h-6 text-[#0076A8]" />
              <h2 className="text-[#0076A8]">Check Availability & Reserve</h2>
            </div>

            <form onSubmit={handleSubmitReservation}>
              <div className="mb-6">
                <Label className="mb-3 block">Select Rental Dates</Label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={1}
                    disabled={{ before: new Date() }}
                    className="mx-auto"
                  />
                </div>
                {dateRange?.from && dateRange?.to && (
                  <div className="mt-3 p-3 bg-[#0076A8] rounded-lg">
                    <p className="text-sm text-white">
                      <strong>Rental period:</strong> {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}
                    </p>
                    <p className="text-sm text-white mt-1">
                      <strong>Duration:</strong> {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))} days
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <Label htmlFor="phone" className="mb-2 block">
                  Contact Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  We'll call you to confirm availability and finalize your reservation
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0076A8] hover:bg-[#005A85] text-white py-6"
              >
                Submit Reservation Request
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm mb-3 text-gray-700">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F2B134]" />
                    Local, family-owned business
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F2B134]" />
                    Most affordable rates in Carson City
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F2B134]" />
                    Free delivery on most equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F2B134]" />
                    Well-maintained, quality tools
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}