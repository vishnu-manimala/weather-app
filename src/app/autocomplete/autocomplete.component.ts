import { Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { PlaceSearchResult } from '../Models/google.model';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent {
  @ViewChild('inputField')
  inputField!: ElementRef;

  @Input() placeholder = 'Enter address...';

  @Output() placeChanged = new EventEmitter<PlaceSearchResult>();

  autocomplete: google.maps.places.Autocomplete | undefined;

  listener: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.inputField.nativeElement
    );

    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = this.autocomplete?.getPlace();
        const result: PlaceSearchResult = {
          address: this.inputField.nativeElement.value,
          name: place?.name,
          location: place?.geometry?.location,
          imageUrl: this.getPhotoUrl(place),
          iconUrl: place?.icon,
        };

        this.placeChanged.emit(result);
      });
    });
  }

  getPhotoUrl(
    place: google.maps.places.PlaceResult | undefined
  ): string | undefined {
    return place?.photos && place?.photos.length > 0
      ? place?.photos[0].getUrl({ maxWidth: 500 })
      : undefined;
  }

  ngOnDestroy() {
    if (this.autocomplete) {
      google.maps.event.clearInstanceListeners(this.autocomplete);
    }
  }
}
