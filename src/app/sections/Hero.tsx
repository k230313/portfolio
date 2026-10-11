import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import GetInTouchButton from '../components/GetInTouchButton';
import { profile } from '../content/siteContent';

export default function Hero() {
  return (
    <section className="py-10 sm:py-14 md:py-20">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 overflow-hidden bg-muted">
              <ImageWithFallback
                src={profile.heroImage}
                alt={profile.name}
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <div className="mb-3 sm:mb-5">
              <h1 className="page-title text-3xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
                {profile.name}
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground">
                {profile.tagline}
              </p>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground/80">
                Newcastle, NSW · available for Sydney
              </p>
            </div>

            <div className="text-sm sm:text-lg text-muted-foreground mb-5 sm:mb-8 max-w-xl leading-relaxed space-y-3">
              <p>{profile.heroBio}</p>
              {profile.heroBioSecondary ? <p>{profile.heroBioSecondary}</p> : null}
            </div>

            <div className="flex flex-wrap gap-3">
              <GetInTouchButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
