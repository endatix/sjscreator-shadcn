import SurveyCreatorComponent from '@/components/SurveyCreator';

export default function SurveyCreator() {
  return (
    <section className="w-full min-h-screen p-8">
      <div className="flex flex-col items-start gap-2 mb-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          SurveyJS Creator
        </h1>
      </div>
        <div className="surveyjs-container">
          <SurveyCreatorComponent />
        </div>
    </section>
  );
}